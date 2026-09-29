"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AuthIcon } from "./auth-icon";
import styles from "../auth-page.module.css";

type FormErrors = {
  employeeId?: string;
  password?: string;
};

type FormNotice = {
  title: string;
  detail: string;
};

export function SignInForm() {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [notice, setNotice] = useState<FormNotice | null>(null);
  const employeeIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!notice) return;

    const timeout = window.setTimeout(() => setNotice(null), 8000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //FORM VALIDATION-//
    const nextErrors: FormErrors = {};
    if (!employeeId.trim()) nextErrors.employeeId = "Enter your employee ID.";
    if (!password) nextErrors.password = "Enter your password.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setNotice(null);
      if (nextErrors.employeeId) employeeIdRef.current?.focus();
      else passwordRef.current?.focus();
      return;
    }

    // Sign-in is a preview until the account service is connected.
    // Add remember-me behavior after its rules are agreed with the backend team.
    setNotice({
      title: "Sign in is not available yet.",
      detail: "Account access will be available soon. Your details were not submitted.",
    });
  }

  //PENDING ACTIONS-//
  function showPending(title: string) {
    setErrors({});
    setNotice({
      title,
      detail: "Please try again later.",
    });
  }

  return (
    <div className={styles.formContent}>
      <header className={styles.formHeader}>
        <h2>Sign in to your account</h2>
        <p>Access your account to manage your canteen, orders, and more.</p>
      </header>

      {/* Show errors beside missing fields and focus the first one. */}
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {/* //EMPLOYEE ID INPUT-// */}
        <div className={styles.field}>
          <label htmlFor="employee-id">Employee ID</label>
          <div className={styles.inputWrap}>
            <AuthIcon name="user" className={styles.inputIcon} />
            <input
              ref={employeeIdRef}
              id="employee-id"
              name="employeeId"
              type="text"
              autoComplete="username"
              placeholder="Enter your employee ID"
              value={employeeId}
              aria-invalid={Boolean(errors.employeeId)}
              aria-describedby={errors.employeeId ? "employee-id-error" : undefined}
              onChange={(event) => {
                setEmployeeId(event.target.value);
                if (errors.employeeId) setErrors((current) => ({ ...current, employeeId: undefined }));
                if (notice) setNotice(null);
              }}
            />
          </div>
          {errors.employeeId && (
            <p className={styles.fieldError} id="employee-id-error">
              {errors.employeeId}
            </p>
          )}
        </div>

        {/* //PASSWORD INPUT-// */}
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <div className={styles.inputWrap}>
            <AuthIcon name="lock" className={styles.inputIcon} />
            <input
              ref={passwordRef}
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              onChange={(event) => {
                setPassword(event.target.value);
                if (errors.password) setErrors((current) => ({ ...current, password: undefined }));
                if (notice) setNotice(null);
              }}
            />
            <button
              className={styles.passwordToggle}
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((visible) => !visible)}
            >
              <AuthIcon name={showPassword ? "eye" : "eyeOff"} />
            </button>
          </div>
          {errors.password && (
            <p className={styles.fieldError} id="password-error">
              {errors.password}
            </p>
          )}
        </div>

        <div className={styles.formOptions}>
          {/* //REMEMBER ME-// */}
          <label className={styles.remember}>
            <input
              type="checkbox"
              name="rememberMe"
            />
            <span>Remember me</span>
          </label>
          {/* //FORGOT PASSWORD-// */}
          <button
            className={styles.textButton}
            type="button"
            onClick={() => showPending("Password reset is not available yet.")}
          >
            Forgot password?
          </button>
        </div>

        {/* //SIGN-IN BUTTON-// */}
        <button className={styles.submitButton} type="submit">
          Sign In <AuthIcon name="arrow" />
        </button>

        <div className={styles.divider} aria-hidden="true">
          <span>OR</span>
        </div>

        {/* //CREATE ACCOUNT BUTTON-// */}
        <button
          className={styles.secondaryButton}
          type="button"
          onClick={() => showPending("Account creation is not available yet.")}
        >
          <AuthIcon name="userPlus" />
          Create an account
        </button>
      </form>

      {/* //STATUS MESSAGE-// */}
      <div className={styles.noticeRegion} role="status" aria-live="polite" aria-atomic="true">
        {notice && (
          <div className={styles.notice}>
            <strong>{notice.title}</strong>
            <span>{notice.detail}</span>
          </div>
        )}
      </div>
    </div>
  );
}
