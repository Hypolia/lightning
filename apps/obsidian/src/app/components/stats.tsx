const stats = [
  { name: 'Argent Convertis', value: '56€'},
  { name: 'Carte(s) Acceptée(s)', value: 0},
  { name: 'Carte(s) en Attente(s)', value: 0},
  { name: 'Carte(s) Refusée(s)', value: 0},
]

export default function Stats () {
  return (
    <div className="border rounded-md overflow-hidden">
      <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
          >
            <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>

            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>

  )
}
