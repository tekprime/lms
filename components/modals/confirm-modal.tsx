"use client";
import {
AlertDialog,
AlertDialogAction,
AlertDialogCancel,
AlertDialogContent,
AlertDialogHeader,
AlertDialogDescription,
AlertDialogFooter,
AlertDialogTitle,
AlertDialogTrigger
} from "@/components/ui/alert-dialog";

interface confirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;

}
const ConfirmModal = ({
  children,
  onConfirm,
}:confirmModalProps) => {
  return (  
    <AlertDialog>
    <AlertDialogTrigger asChild>
      {children}
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  );
}
 
export default ConfirmModal;