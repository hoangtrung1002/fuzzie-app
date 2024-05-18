"use client";
import WorkflowForm from "@/components/form/worflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import { Plus } from "lucide-react";
import React from "react";

const WorkflowButton = () => {
  const { setOpen, setClose } = useModal();
  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subHeading="Workflows are a powerful that help you automate tasks."
      >
        <WorkflowForm />
      </CustomModal>
    );
  };
  return (
    <Button size="icon" onClick={handleClick}>
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
