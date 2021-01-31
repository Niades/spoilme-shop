from ozon_scraper import OzonScraper


def main():
    s = OzonScraper()
    product = s.scrape("https://www.ozon.ru/context/detail/id/171523786/")
    print(product)

if __name__ == '__main__':
    main()