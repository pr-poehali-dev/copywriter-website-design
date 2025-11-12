import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import GoldenPath from "@/components/GoldenPath";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <GoldenPath />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <section className="container mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-wider uppercase text-primary neon-text px-4 py-2 border border-primary/30 rounded-full backdrop-blur-sm">
                  Копирайтер-практик
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Пишу тексты, которые{" "}
                <span className="gold-accent">приносят деньги</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Без эзотерики, без воды и без «миллион за 3 дня»
              </p>

              <p className="text-lg text-muted-foreground">
                Копирайтер-практик для онлайн-продуктов, воронок и e-mail маркетинга.
                <br />
                <span className="gold-accent font-semibold">8 лет опыта.</span> Клиенты — от экспертов и школ до известных имён.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-lg px-8 py-6 neon-glow hover:scale-105 transition-transform">
                    <Icon name="Send" className="mr-2" size={20} />
                    Написать в Telegram
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://cdn.poehali.dev/files/4fc85b90-5fc8-4f13-aa2e-6d3a33ecaade.png"
                alt="Копирайтер"
                className="relative rounded-3xl shadow-2xl border-2 border-primary/20 neon-glow w-full"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 neon-glow">
              <p className="text-lg leading-relaxed">
                Я не из тех, кто прошёл 10 курсов и пишет по шаблонам.
                Я училась на клиентах. Реальных. С дедлайнами, задачами и паникой в 23:57.
              </p>
            </Card>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Я пишу тексты для тех, кто продаёт, обучает и запускает онлайн-продукты.
                E-mail-цепочки, прогревы, лендинги, тексты для Telegram-ботов, сценарии Reels — всё, что помогает людям покупать осознанно.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                У меня нет диплома «копирайтера-гурмана». Но есть понимание, что работает, а что — просто красиво звучит.
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-primary/30">
              <div className="flex items-start gap-4">
                <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Среди клиентов:</h3>
                  <p className="text-lg">
                    Ирина Хакамада, Родион Якименко, Дмитрий Шумейко, Влада Олеговна,
                    Динара Касько, Александра Мальцева, «Вита Медикус»
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/30 neon-glow-purple">
              <blockquote className="text-2xl font-semibold text-center">
                <Icon name="Quote" className="inline-block text-secondary mr-2" size={28} />
                Я не пишу вкусные тексты. Я делаю так, чтобы текст работал как бизнес-инструмент.
                <Icon name="Quote" className="inline-block text-secondary ml-2 rotate-180" size={28} />
              </blockquote>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что я <span className="gold-accent">делаю</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:neon-glow group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon name="Zap" className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Воронки продаж</h3>
              <p className="text-muted-foreground leading-relaxed">
                Прогревы, e-mail-цепочки, Telegram-боты, сценарии вебинаров.
                Подвожу клиента к покупке без давления.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all hover:scale-105 hover:neon-glow-purple group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Icon name="Mail" className="text-secondary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">E-mail маркетинг</h3>
              <p className="text-muted-foreground leading-relaxed">
                Welcome-серии, письма для запусков, рассылки.
                Чтобы человек не просто открыл письмо, а дождался следующего.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:neon-glow group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon name="FileText" className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Лендинги и коммерческие тексты</h3>
              <p className="text-muted-foreground leading-relaxed">
                Баннеры, страницы продаж, сценарии, чек-листы.
                Минимум текста — максимум смысла.
              </p>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gold-accent">Кейсы</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:neon-glow group">
              <div className="mb-6 relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border-2 border-primary/30 overflow-hidden">
                  <div className="text-center p-4">
                    <Icon name="Image" className="text-primary/50 mx-auto mb-2" size={40} />
                    <p className="text-sm text-muted-foreground">здесь фото кейса или логотип клиента</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Telegram-бот «Планеты изобилия»</h3>
              <div className="space-y-3 text-sm">
                <p><span className="text-primary font-semibold">Что делала:</span> тексты и сценарии для вовлечения</p>
                <p><span className="text-secondary font-semibold">Как это было:</span> превратили категории в «планеты» — Любви, Денег, Изобилия. Люди реально не выходили из бота — им было интересно.</p>
                <p className="italic text-muted-foreground">(Космический storytelling с ненавязчивыми продажами.)</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all hover:scale-105 hover:neon-glow-purple group">
              <div className="mb-6 relative">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center border-2 border-secondary/30 overflow-hidden">
                  <div className="text-center p-4">
                    <Icon name="Image" className="text-secondary/50 mx-auto mb-2" size={40} />
                    <p className="text-sm text-muted-foreground">здесь фото кейса или логотип клиента</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Благотворительный фонд JomDesign</h3>
              <div className="space-y-3 text-sm">
                <p><span className="text-primary font-semibold">Что делала:</span> коммерческое предложение и презентация для партнёров</p>
                <p><span className="text-secondary font-semibold">Как это было:</span> собрала информацию, оформила, показала выгоды для бизнеса.</p>
                <p className="italic text-muted-foreground">(Результат — фонд расширил сотрудничество с компаниями.)</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:neon-glow group">
              <div className="mb-6 relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border-2 border-primary/30 overflow-hidden">
                  <div className="text-center p-4">
                    <Icon name="Image" className="text-primary/50 mx-auto mb-2" size={40} />
                    <p className="text-sm text-muted-foreground">здесь фото кейса</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">«Вита Медикус», центр косметологии и стоматологии</h3>
              <div className="space-y-3 text-sm">
                <p><span className="text-primary font-semibold">Что делала:</span> тексты для сайта и рекламных материалов</p>
                <p><span className="text-secondary font-semibold">Как это было:</span> скомбинировала профессиональный язык и лёгкий, понятный стиль.</p>
                <p className="italic text-muted-foreground">(Клиенты перестали бояться слова «стоматология».)</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gold-accent">Отзывы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Когда клиенты довольны — они пишут. Вот несколько сообщений от тех, с кем работала.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
            <Card className="p-0 bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden hover:scale-105 transition-transform hover:neon-glow">
              <img
                src="https://cdn.poehali.dev/files/6b13c43b-474d-457b-a40a-da1a003e19d2.jpg"
                alt="Отзыв клиента"
                className="w-full h-auto"
              />
            </Card>

            <Card className="p-0 bg-card/50 backdrop-blur-sm border-secondary/20 overflow-hidden hover:scale-105 transition-transform hover:neon-glow-purple">
              <img
                src="https://cdn.poehali.dev/files/2264a07b-f45b-40c4-b723-9ff77b5c271a.jpg"
                alt="Отзыв клиента"
                className="w-full h-auto"
              />
            </Card>

            <Card className="p-0 bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden hover:scale-105 transition-transform hover:neon-glow">
              <img
                src="https://cdn.poehali.dev/files/e097fc62-98df-4694-bbd8-f418f3ddf31c.jpg"
                alt="Отзыв клиента"
                className="w-full h-auto"
              />
            </Card>

            <Card className="p-0 bg-card/50 backdrop-blur-sm border-secondary/20 overflow-hidden hover:scale-105 transition-transform hover:neon-glow-purple">
              <img
                src="https://cdn.poehali.dev/files/21a2fc9e-84c8-425f-af6e-e8efb1bb591b.jpg"
                alt="Отзыв клиента"
                className="w-full h-auto"
              />
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 backdrop-blur-sm border-primary/30 neon-glow text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы к текстам, которые работают?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Напишите мне в Telegram — обсудим ваш проект
            </p>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-10 py-6 neon-glow hover:scale-105 transition-transform">
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
            </a>
          </Card>
        </section>

        <footer className="container mx-auto px-4 py-12 text-center border-t border-primary/10">
          <p className="text-muted-foreground">
            © 2025 Копирайтер-практик. Тексты, которые приносят деньги.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;