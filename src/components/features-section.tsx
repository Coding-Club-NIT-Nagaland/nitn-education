import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Target, Heart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Curated Content",
    description: "Hand-picked resources and roadmaps from experienced club members who understand your learning journey",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    hoverColor: "group-hover:from-blue-600 group-hover:to-cyan-600",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Learn together with peers and get personalized help from passionate club mentors and alumni",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    hoverColor: "group-hover:from-purple-600 group-hover:to-pink-600",
  },
  {
    icon: Target,
    title: "Track Progress",
    description: "Follow structured learning paths and monitor your advancement with detailed progress tracking",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    hoverColor: "group-hover:from-green-600 group-hover:to-emerald-600",
  },
  {
    icon: Heart,
    title: "Free & Open",
    description: "All content is completely free and accessible to everyone, because education should be universal",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    hoverColor: "group-hover:from-orange-600 group-hover:to-red-600",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:from-transparent dark:via-blue-900/5 dark:to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-indigo-400/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-800/20 mb-6 backdrop-blur-sm">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Why Choose Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
            Why Choose Education Channel?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Built by students, for students. Experience quality content with community-driven learning that adapts to your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden hover:bg-white dark:hover:bg-gray-800"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

              <CardContent className="relative p-8 text-center h-full flex flex-col">
                {/* Icon Container */}
                <div className={`w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${feature.bgColor} ${feature.hoverColor} flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <feature.icon className={`w-10 h-10 relative z-10 text-white transition-transform duration-300`} />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to experience the future of collaborative learning?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-800/20 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-pointer group">
            <span className="text-blue-700 dark:text-blue-300 font-medium">Join thousands of learners</span>
            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
