import mechanicalsoup
import json
from .models import Product


USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36"

class OzonScraper:
    def __init__(self):
        self._browser = mechanicalsoup.StatefulBrowser(user_agent=USER_AGENT)
    
    def scrape(self, url: str) -> Product:
        self._browser.open(url)
        jsonld_product = self._browser.page.find(type="application/ld+json").contents[0]
        product_json = json.loads(jsonld_product)
        return Product(
            name=product_json["name"].strip(),
            description=product_json["description"].strip(),
            image=product_json["image"],
            price=float(product_json["offers"]["price"]),
            instock=(product_json["offers"]["availability"] == "http://schema.org/InStock")
        )