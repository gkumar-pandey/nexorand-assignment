import Container from "@/components/container/container";
import RegisterForm from "@/components/form/RegisterForm";

const Page = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-row items-center justify-center py-10">
          <RegisterForm />
        </div>
      </Container>
    </div>
  );
};

export default Page;
