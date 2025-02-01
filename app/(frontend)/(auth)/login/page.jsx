import Link from "next/link";
import styles from "../../(public)/(css)/register.module.css";

export const metadata = {
  title: "Login",
};

export default function Register() {
  return (
    <section className="container">
        <h1>Login</h1>

        <form action="">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" name="email"/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password"/>
          </div>

          <div className="mb-3">
            <button className="btn btn-primary">Login</button>

            <Link href="/register">Register</Link>
          </div>

        </form>
    </section>
  )
}
