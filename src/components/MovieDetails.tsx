type Details = {
  label: string
  value: string
}

const MovieDetails = ({ label, value }: Details) => {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <label className="text-indigo-300 font-medium">{label}:</label>
      <span className="text-zinc-50/90">{value}</span>
    </div>
  )
}

export default MovieDetails
