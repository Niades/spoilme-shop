import pytest
from ozon_scraper import OzonScraper
from ozon_scraper.models import Product

@pytest.fixture
def URLs():
    return [
        "https://www.ozon.ru/context/detail/id/171523786/",
        "https://www.ozon.ru/context/detail/id/223325920/",
        "https://www.ozon.ru/context/detail/id/185525963/",
        "https://www.ozon.ru/product/koltso-jv-dzhey-vi-iz-belyy-zolota-585-proby-s-brilliantami-196064183/",
        "https://www.ozon.ru/context/detail/id/194265044/",
        "https://www.ozon.ru/product/maneken-prymadonna-multi-tsvet-temno-seryy-razmer-m-610256-32875069/",
    ]

@pytest.fixture
def products():
    return [
        Product(
            description="iPad Pro 11 дюймов оснащен потрясающим дисплеем Liquid Retina от края до края. Его новые камеры уровня Pro - широкоугольная и сверхширокоугольная - и сканер LiDAR открывают невероятные возможности для передовых приложений с дополненной реальностью. Мощный процессор A12Z Bionic обеспечивает работу всех необходимых приложений и игр со сложной графикой. Поддерживаются Apple Pencil2 и новая клавиатура Magic Keyboard с трекпадом. Доступна быстрая связь по Wi‑Fi и 4G LTE. Можно работать весь день без подзарядки. А наличие миллионов приложений в App Store позволяет использовать iPad Pro для самых разных задач, где бы вы ни были. \n\n Дисплей Liquid Retina 11 дюймов от края до края, технологии True Tone и ProMotion, широкий цветовой охват (P3)\n Процессор A12Z Bionic с системой Neural Engine\n Широкоугольная камера 12 Мп, сверхширокоугольная камера 10 Мп, сканер LiDAR\n Фронтальная камера TrueDepth 7 Мп\n Face ID для безопасной аутентификации и Apple Pay\n Четыре динамика и пять микрофонов студийного качества\n Передача данных по сетям Wi‑Fi 6 802.11ax и сотовым сетям Gigabit Class LTE\n До 10 часов работы от аккумулятора без подзарядки\n Порт USB‑C для зарядки iPad Pro и подключения аксессуаров\n Поддержка клавиатур Magic Keyboard и Smart Keyboard Folio, а также Apple Pencil\n iPadOS с удобными функциями многозадачности и всеми замечательными возможностями iOS 13",
            image="https://cdn1.ozone.ru/s3/multimedia-c/6022105020.jpg", 
            instock=True, 
            name="Планшет Apple iPad Pro Wi-Fi (2020), 11\", 128 GB, серый", 
            price=69990.0
        ),
        Product(
            description="APPLE MacBook Air 13 (2020) Gold MGNE3RU/A (Apple M1/8192Mb/512Gb SSD/Wi-Fi/Bluetooth/Cam/13.3/2560x1600/Mac OS)", 
            image="https://cdn1.ozone.ru/s3/multimedia-k/6036391124.jpg", 
            instock=True, 
            name="13.3\" Ноутбук Apple MacBook Air 13 (2020) (MGNE3RU/A), золотой", 
            price=132928.0
        ),
        Product(
            description="ОттенкиХайлайтер Moon Dust\xa0Тени для век Soft Petal\xa0Тени для век Purple Haze\xa0EU Reseller делает всё возможное для того, чтобы изображения и информация о продукции были предоставлены своевременно и корректно. Однако, иногда обновление данных может производиться с задержкой. Даже в случаях, когда маркировка полученной Вами продукции отличается от представленной на сайте, мы гарантируем свежесть товаров. Мы рекомендуем ознакомиться с инструкцией по применению, указанной на товаре, перед его использованием, а не только полностью полагаться на описание, представленное на сайте.",
            image="https://cdn1.ozone.ru/s3/multimedia-6/6020323734.jpg",
            instock=True,
            name="Laura Geller, Red Carpet Ready Palette, Хайлайтер и тени для глаз и лица, 1,2 г (0,04 унции)",
            price=5589.0
        ),
        Product(
            description="Золотое кольцо 585 пробы, вставки - бриллиант - 48шт. вес 0.20 карата",
            image="https://cdn1.ozone.ru/s3/multimedia-f/6023156259.jpg",
            instock=True,
            name="Кольцо JV Джей Ви из белый золота 585 пробы с бриллиантами",
            price=63041.0
        ),
        Product(
            description="Следующее поколение игр несет с собой нашу самую большую цифровую библиотеку для нашей самой маленькой Xbox. Благодаря более динамичным игровым мирам, ускоренной загрузке и добавлению Xbox Game Pass (продается отдельно) полностью цифровая консоль Xbox Series S является самым выгодным предложением в мире игр.\nАрхитектура Xbox Velocity на базе специализированного твердотельного накопителя работает в сочетании с инновационной технологией системы на кристалле (SOC) и обеспечивает нашей самой маленькой консоли скорость до 120 к/с.\nКарта расширения памяти Seagate для Xbox Series X|S емкостью 1 ТБ подключается к задней панели консоли через выделенный разъем расширения хранилища и воспроизводит работу встроенного специализированного твердотельного накопителя консоли, обеспечивая дополнительное игровое хранилище и сохраняя производительность. (Продается отдельно.)\nБлагодаря библиотеке абонемента Xbox Game Pass из более чем 100 высококачественных игр, а также тысячам текущих избранных, новых и проверенных временем игр, консоль Xbox Series S предлагает безграничные возможности для развлечений сразу после ее извлечения из коробки.Обращаем ваше внимание, что Ozon.ru гарантирует получение 1 (одной) консоли 1 (одному) зарегистрированного покупателю.",
            image="https://cdn1.ozone.ru/s3/multimedia-y/6022833682.jpg",
            instock=False,
            name="Игровая консоль Microsoft Xbox Series S, белый",
            price=26990.0
        ),
        Product(
            description="Манекен Prymadonna \"Multi\" сконструирован так, чтобы вращаться свободно по своей оси или  фиксироваться в позиции для более легкой наметки при помощи булавок. Чтобы прокрутить торс,  его нужно немного приподнять. Для фиксации опустить так, чтобы он попал в одну из четырех  фиксирующих позиций.  Корпус и стойка манекена изготовлены из качественного пластика.  Верх изделия обтянут 100% полиэстером.  - размер M (грудь 100-116 см; талия 82-99 см; бедра 104-122 см).", 
            image="https://cdn1.ozone.ru/multimedia/1021806372.jpg", 
            instock=True, 
            name="Манекен Prymadonna \"Multi\", цвет: темно-серый, размер М. 610256",
            price=20216.0
        )
    ]

def test_ozon_scraper(URLs, products):
    s = OzonScraper()
    for i, url in enumerate(URLs):
        scraped_product = s.scrape(url)
        assert scraped_product.name == products[i].name
        assert scraped_product.description == products[i].description
        assert scraped_product.image == products[i].image
        assert scraped_product.price == products[i].price
