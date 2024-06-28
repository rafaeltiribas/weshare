import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="justify-content-center align-items-center">
      <div className="text-center">
        <div className="mb-4">
          <h5>Página de Login</h5>
          <hr className="mt-0" />
        </div>
        <div className="mb-3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

