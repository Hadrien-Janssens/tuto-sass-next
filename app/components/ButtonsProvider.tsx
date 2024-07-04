import { Button } from "@/components/ui/button";

const ButtonsProvider = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button>Github</Button>
      <Button>Google</Button>
    </div>
  );
};

export default ButtonsProvider;
