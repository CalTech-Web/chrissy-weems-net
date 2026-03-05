export default function Hero({ title, subtitle, children, gradient = true }) {
  return (
    <section className={`relative pt-20 ${gradient ? 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700' : 'bg-primary-800'}`}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
