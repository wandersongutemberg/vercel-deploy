import { Flame, Mail, MapPin, Pencil } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Horas estudadas", value: "428h" },
  { label: "Cursos concluídos", value: "12" },
  { label: "Sequência atual", value: "37 dias" },
]

export function ProfileHeader() {
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      {/* Banner */}
      <div className="h-32 w-full bg-primary/15 sm:h-40" aria-hidden="true" />

      <div className="px-5 pb-6 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="-mt-14 sm:-mt-16">
              <div className="relative size-28 overflow-hidden rounded-2xl border-4 border-card bg-muted shadow-md sm:size-32">
                <Image
                  src="/images/avatar.png"
                  alt="Foto de perfil de Ana Martins"
                  fill
                  sizes="128px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">Ana Martins</h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                  <Flame className="size-3.5" aria-hidden="true" />
                  Nível 8
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Estudante de Ciência da Computação</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4" aria-hidden="true" />
                  São Paulo, BR
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="size-4" aria-hidden="true" />
                  ana.martins@email.com
                </span>
              </div>
            </div>
          </div>

          <Button className="gap-2 rounded-full self-start sm:self-auto">
            <Pencil className="size-4" aria-hidden="true" />
            Editar perfil
          </Button>
        </div>

        {/* Quick stats */}
        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <dt className="text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
              <dd className="mt-1 text-lg font-semibold sm:text-2xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
