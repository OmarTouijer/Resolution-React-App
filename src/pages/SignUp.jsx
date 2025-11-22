export default function SignUp() {
  return (
    <div className="signup-page">
      <h2>Create an account</h2>
      <form className="auth-form">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
