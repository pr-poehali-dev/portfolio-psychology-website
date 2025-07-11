import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-semibold text-gray-800">
              Анна Петрова
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                О себе
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
                Детский психолог
                <span className="block text-gray-600 text-2xl md:text-3xl mt-2">
                  Анна Петрова
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Помогаю детям и подросткам преодолевать трудности, развивать
                эмоциональный интеллект и строить здоровые отношения с
                окружающим миром.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3">
                  Записаться на консультацию
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/img/9dcf68b6-90d9-4b77-872a-be7f1bf3ebd0.jpg"
                  alt="Анна Петрова - детский психолог"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/img/a83a288b-929d-40b2-aea9-6995847d6282.jpg"
                  alt="Кабинет детского психолога"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-800">
                О моей практике
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Работаю с детьми и подростками уже более 8 лет.
                  Специализируюсь на возрастной психологии, помощи в преодолении
                  трудностей развития и адаптации.
                </p>
                <p>
                  Использую современные методы арт-терапии, игровой терапии и
                  когнитивно-поведенческой терапии, адаптированные для работы с
                  детьми.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-semibold text-gray-800">8+</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-semibold text-gray-800">
                    200+
                  </div>
                  <div className="text-sm text-gray-600">детей</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-800 mb-4">Услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Индивидуальный подход к каждому ребенку с учетом его особенностей
              и потребностей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl font-medium text-gray-800">
                  Эмоциональные трудности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Помощь при тревожности, страхах, агрессии и других
                  эмоциональных проблемах
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-xl font-medium text-gray-800">
                  Социальная адаптация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Развитие навыков общения, работа с застенчивостью и проблемами
                  в коллективе
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-xl font-medium text-gray-800">
                  Школьные проблемы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Мотивация к учебе, преодоление трудностей обучения и адаптация
                  к школе
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Home" size={24} className="text-orange-600" />
                </div>
                <CardTitle className="text-xl font-medium text-gray-800">
                  Семейные консультации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Работа с родителями, улучшение детско-родительских отношений
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" size={24} className="text-red-600" />
                </div>
                <CardTitle className="text-xl font-medium text-gray-800">
                  Подростковые кризисы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Поддержка в переходном возрасте, самоопределение и уверенность
                  в себе
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" size={24} className="text-teal-600" />
                </div>
                <CardTitle className="text-xl font-medium text-gray-800">
                  Арт-терапия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Творческие методы работы для выражения эмоций и развития
                  личности
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-gray-800 mb-4">
                  Контакты
                </h2>
                <p className="text-lg text-gray-600">
                  Готова ответить на ваши вопросы и назначить первую
                  консультацию
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Телефон</div>
                    <div className="text-gray-600">+7 (123) 456-78-90</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-gray-600">
                      anna.petrova@example.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Адрес</div>
                    <div className="text-gray-600">
                      г. Москва, ул. Примерная, д. 15
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Часы работы</div>
                    <div className="text-gray-600">
                      Пн-Пт: 9:00-19:00, Сб: 10:00-16:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-medium text-gray-800 mb-6">
                Записаться на консультацию
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-transparent resize-none"
                    placeholder="Расскажите о вашей ситуации..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-2">Анна Петрова</h3>
            <p className="text-gray-400 mb-4">Детский психолог</p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm">
              © 2024 Анна Петрова. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
