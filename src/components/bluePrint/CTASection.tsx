import type { Copy } from "../../../lib/bluePrint/copy";
export default function CTASection({ copy }: { copy: Copy["cta"] }) {
  return (
    <section
      id="cta"
      className="mt-10 rounded-3xl border border-gray-200 bg-gradient-to-br from-sky-50 to-emerald-50 p-6"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold">{copy.title}</h3>
          {copy.subtitle && <p className="text-gray-700">{copy.subtitle}</p>}
        </div>
        <form
          action={copy.formAction ?? "#"}
          method="post"
          className="flex w-full max-w-md gap-2"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none ring-soft focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            aria-label="Email address"
          />
          <button className="rounded-xl bg-sky-600 px-4 py-3 font-medium text-white hover:bg-sky-700">
            {copy.button}
          </button>
        </form>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        We’ll only email for product updates and beta access. You can
        unsubscribe anytime.
      </p>
    </section>
  );
}
