from glob import glob
import json
import jsons
from ozon_scraper import OzonScraper

def main():
    s = OzonScraper()
    for input_file in glob("./input/*.json"):
        with open(input_file) as file_handle:
            links = json.load(file_handle)
            products = []
            for link in links:
                product = s.scrape(link)
                products.append(product)
            with open("./output/1.json", "w") as out_file:
                out_file.write(jsons.dumps(products))
                out_file.close()

if __name__ == '__main__':
    main()