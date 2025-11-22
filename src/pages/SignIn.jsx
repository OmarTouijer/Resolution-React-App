export default function SignIn() {
  return (
    <div className="signin-page">
      <h2>Sign in</h2>
      <form className="auth-form">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
