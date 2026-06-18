import {
  Award,
  BookOpenCheck,
  Brain,
  Clock,
  Flame,
  GraduationCap,
  Target,
  Trophy,
  type LucideIcon,
} from "lucide-react"

type Achievement = {
  icon: LucideIcon
  title: string
  description: string
  progress: number
  unlocked: boolean
}

const achievements: Achievement[] = [
  {
    icon: Flame,
    title: "Maratonista",
    description: "37 dias seguidos de estudo",
    progress: 100,
    unlocked: true,
  },
  {
    icon: BookOpenCheck,
    title: "Devorador de Livros",
    description: "12 cursos concluídos",
    progress: 100,
    unlocked: true,
  },
  {
    icon: Clock,
    title: "Foco Total",
    description: "400h de estudo acumuladas",
    progress: 100,
    unlocked: true,
  },
  {
    icon: Brain,
    title: "Mestre dos Quizzes",
    description: "90% de acertos em provas",
    progress: 90,
    unlocked: true,
  },
  {
    icon: Target,
    title: "Meta Semanal",
    description: "18 de 20 horas esta semana",
    progress: 90,
    unlocked: false,
  },
  {
    icon: GraduationCap,
    title: "Especialista",
    description: "Conclua a trilha avançada",
    progress: 65,
    unlocked: false,
  },
  {
    icon: Trophy,
    title: "Top 10",
    description: "Entre no ranking dos melhores",
    progress: 40,
    unlocked: false,
  },
  {
    icon: Award,
    title: "Colecionador",
    description: "Desbloqueie 20 conquistas",
    progress: 35,
    unlocked: false,
  },
]

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const { icon: Icon, title, description, progress, unlocked } = achievement

  return (
    <article
      className={`group relative flex flex-col gap-3 rounded-2xl border p-5 transition-colors ${
        unlocked
          ? "border-primary/30 bg-card hover:border-primary/60"
          : "border-border bg-card/60"
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex size-12 items-center justify-center rounded-xl ${
            unlocked ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
          }`}
        >
          <Icon className="size-6" aria-hidden="true" />
        </div>
        {unlocked && (
          <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
            Desbloqueada
          </span>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground text-pretty">{description}</p>
      </div>

      <div className="mt-auto space-y-1.5 pt-2">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={`h-full rounded-full ${unlocked ? "bg-primary" : "bg-muted-foreground/50"}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-right text-xs text-muted-foreground">{progress}%</p>
      </div>
    </article>
  )
}

export function Achievements() {
  const unlockedCount = achievements.filter((a) => a.unlocked).length

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Conquistas</h2>
          <p className="text-sm text-muted-foreground">
            {unlockedCount} de {achievements.length} desbloqueadas
          </p>
        </div>
        <Trophy className="size-5 text-primary" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.title} achievement={achievement} />
        ))}
      </div>
    </section>
  )
}
