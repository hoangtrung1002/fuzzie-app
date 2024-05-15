import { z } from "zod";
import { EditUserProfileSchema } from "@/lib/validations/profileSchema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  user: any;
  onUpdate?: any;
};

const useProfileForm = ({ user, onUpdate }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const handleSubmit = async (
    values: z.infer<typeof EditUserProfileSchema>
  ) => {
    setIsLoading(true);
    await onUpdate(values);
    setIsLoading(false);
  };
  return { handleSubmit, isLoading, form };
};

export default useProfileForm;
