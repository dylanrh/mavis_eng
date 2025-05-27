'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Image from 'next/image';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Palette, ImageUp, Lightbulb } from 'lucide-react';
import { recommendThemeAccentColor, type ThemeAccentColorInput, type ThemeAccentColorOutput } from '@/ai/flows/theme-recommendation';
import { useToast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

const formSchema = z.object({
  image1: z
    .custom<FileList>()
    .refine((files) => files && files.length === 1, 'Please upload one image.')
    .refine((files) => files && files[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => files && ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      'Only .jpg, .jpeg, .png, .webp and .gif formats are supported.'
    ),
  image2: z
    .custom<FileList>()
    .refine((files) => files && files.length === 1, 'Please upload one image.')
    .refine((files) => files && files[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => files && ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      'Only .jpg, .jpeg, .png, .webp and .gif formats are supported.'
    ),
  image3: z
    .custom<FileList>()
    .refine((files) => files && files.length === 1, 'Please upload one image.')
    .refine((files) => files && files[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => files && ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      'Only .jpg, .jpeg, .png, .webp and .gif formats are supported.'
    ),
  description: z.string().min(10, 'Description must be at least 10 characters long.').max(500, 'Description must be at most 500 characters long.'),
});

type FormValues = z.infer<typeof formSchema>;

const fileToDataUri = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export function ThemeAdvisorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<ThemeAccentColorOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const [imagePreviews, setImagePreviews] = useState<{ image1?: string; image2?: string; image3?: string }>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, fieldName: keyof FormValues) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => ({ ...prev, [fieldName]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreviews((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };
  
  const watchedFiles = watch(['image1', 'image2', 'image3']);
  
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendation(null);

    try {
      const image1DataUri = await fileToDataUri(data.image1[0]);
      const image2DataUri = await fileToDataUri(data.image2[0]);
      const image3DataUri = await fileToDataUri(data.image3[0]);

      const input: ThemeAccentColorInput = {
        image1DataUri,
        image2DataUri,
        image3DataUri,
        description: data.description,
      };

      const result = await recommendThemeAccentColor(input);
      setRecommendation(result);
      toast({
        title: "Recommendation Ready!",
        description: "We've found a beautiful accent color for your theme.",
      });
      reset();
      setImagePreviews({});
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const ImageInputField = ({fieldName, label}: {fieldName: keyof FormValues, label: string}) => {
    const fileList = watch(fieldName);
    const previewUrl = fileList && fileList[0] ? URL.createObjectURL(fileList[0]) : null;

    return (
      <div className="space-y-2">
        <Label htmlFor={fieldName} className="flex items-center gap-2">
          <ImageUp className="w-5 h-5 text-primary" /> {label}
        </Label>
        <Input
          id={fieldName}
          type="file"
          accept={ACCEPTED_IMAGE_TYPES.join(',')}
          {...register(fieldName)}
          className="file:text-primary file:font-semibold file:mr-2 file:border-0 file:bg-primary/10 file:rounded-md file:px-2 file:py-1 hover:file:bg-primary/20"
        />
        {previewUrl && (
          <div className="mt-2 relative w-full h-32 rounded-md overflow-hidden border">
            <Image src={previewUrl} alt={`${label} preview`} layout="fill" objectFit="contain" />
          </div>
        )}
        {errors[fieldName] && <p className="text-sm text-destructive">{errors[fieldName]?.message}</p>}
      </div>
    );
  }


  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2 text-primary">
          <Palette className="w-7 h-7" />
          AI Theme Advisor
        </CardTitle>
        <CardDescription>
          Upload three images that represent your wedding theme and provide a brief description. Our AI will suggest a beautiful accent color!
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ImageInputField fieldName="image1" label="Theme Image 1" />
            <ImageInputField fieldName="image2" label="Theme Image 2" />
            <ImageInputField fieldName="image3" label="Theme Image 3" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" /> Theme Description
            </Label>
            <Textarea
              id="description"
              {...register('description')}
              placeholder="e.g., Rustic barn wedding with wildflowers and fairy lights..."
              rows={4}
            />
            {errors.description && <p className="text-sm text-destructive">{errors.description.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4">
          <Button type="submit" disabled={isLoading} size="lg">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Getting Recommendation...
              </>
            ) : (
              'Find Accent Color'
            )}
          </Button>
          
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {recommendation && (
            <Alert variant="default" className="bg-primary/5 border-primary/30">
               <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                <AlertTitle className="text-primary">Accent Color Recommendation!</AlertTitle>
              </div>
              <AlertDescription className="mt-2 space-y-2">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full border border-border shadow-md" 
                    style={{ backgroundColor: recommendation.accentColor }}
                    title={`Hex: ${recommendation.accentColor}`}
                  />
                  <p className="font-semibold text-lg text-foreground">{recommendation.accentColor}</p>
                </div>
                <p className="text-muted-foreground">{recommendation.reason}</p>
              </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
