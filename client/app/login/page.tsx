import Container from "@/components/container/container";
import LoginForm from "@/components/form/LoginForm";

export default function Page() {
  return (
    <div>
      <Container>
        <div className="flex flex-row items-center justify-center py-10">
          <LoginForm />
        </div>
      </Container>
    </div>
  );
}
