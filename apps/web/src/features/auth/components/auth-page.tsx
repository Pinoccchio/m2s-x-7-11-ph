import Image from "next/image";
import { AuthIcon, type AuthIconName } from "./auth-icon";
import { SignInForm } from "./sign-in-form";
import styles from "../auth-page.module.css";

const highlights: { icon: AuthIconName; title: string; detail: string }[] = [
  { icon: "shield", title: "Secure Login", detail: "Your data is safe with us." },
  { icon: "bolt", title: "Fast Access", detail: "Get things done quickly." },
  { icon: "check", title: "Reliable System", detail: "Always available when you need it." },
];

const offices = ["PARAÑAQUE", "DASMA", "IMUS"];

export function AuthPage() {
  return (
    <main className={styles.page}>
      <section className={styles.shell} aria-label="M2S sign-in">
        <div className={styles.hero}>
          <Image
            src="/images/m2s-office-hero-composite.png"
            alt=""
            fill
            priority
            unoptimized
            sizes="(max-width: 820px) 100vw, 690px"
            className={styles.heroPhoto}
          />
          <div className={styles.heroVeil} aria-hidden="true" />

          <div className={styles.heroContent}>
            {/* BRAND LOCKUP: transparent asset derived from the supplied artwork. */}
            <div className={styles.brandLockup}>
              <Image
                src="/brand/m2s-seven-eleven-lockup.png"
                alt="M2S, Malinis Maintenance Services, and 7-Eleven Philippines"
                width={2095}
                height={751}
                priority
                className={`${styles.brandImage} ${styles.brandRest}`}
              />
              <Image
                src="/brand/m2s-seven-eleven-lockup.png"
                alt=""
                aria-hidden="true"
                width={2095}
                height={751}
                className={`${styles.brandImage} ${styles.brandM2s}`}
              />
            </div>

            <div className={styles.heroIntro}>
              <h1>
                Welcome Back!
                <br />
                Please Login
              </h1>
              <p>Access your account to manage your canteen, orders, and more.</p>
            </div>

            <div className={styles.highlights} aria-label="Workspace benefits">
              {highlights.map((item) => (
                <div className={styles.highlight} key={item.title}>
                  <span className={styles.highlightIcon}>
                    <AuthIcon name={item.icon} />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.offices}>
              <p className={styles.officesLabel}>Our offices</p>
              <ul>
                {offices.map((office) => (
                  <li key={office}>
                    <AuthIcon name="pin" />
                    <span>
                      <strong>{office}</strong>
                      <small>Office</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.formPanel}>
          <SignInForm />
          <p className={styles.copyright}>
            © {new Date().getFullYear()} M2S x 7-Eleven Philippines. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
