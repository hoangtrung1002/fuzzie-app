import { WorkflowFormSchema } from "@/lib/validations/workflowSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useWorkflowForm = () => {
  const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(WorkflowFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const isLoading = form.formState.isLoading;

  const handleSubmit = () => {};

  return { form, isLoading, handleSubmit };
};

export default useWorkflowForm;
