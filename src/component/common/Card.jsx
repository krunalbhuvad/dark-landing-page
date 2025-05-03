export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="card-container relative h-full w-full overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0f0d1d]">
      {/* Glow overlay */}
      <div className="flex h-full flex-col justify-between bg-dark">
        {/* Icon */}
        <img
          src={icon}
          alt={title}
          className="relative z-10 mb-4 w-full object-contain"
        />

        {/* Title */}
        <div className="px-6 pb-8">
          <h3 className="relative z-10 mb-2 text-[32px] font-semibold text-white">
            {title}
          </h3>

          {/* Description */}
          <p className="relative z-10 text-[#9893B8]">{description}</p>
        </div>
      </div>
    </div>
  );
}
