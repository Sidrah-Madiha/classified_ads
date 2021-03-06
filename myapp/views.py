from django.shortcuts import render
from django.http import Http404
from bs4 import BeautifulSoup
import requests
from requests.compat import quote_plus
from .models import Search

BASEDIR_CRAIGLIST = 'https://newyork.craigslist.org/d/services/search/?query={}'
BASE_IMG_URL = 'https://images.craigslist.org/{}_300x300.jpg'

# Create your views here.
def home(request):
	return render(request, "base.html")

def new_search(request):
	search = request.POST.get("search")
	Search.objects.create(search=search)
	final_url = BASEDIR_CRAIGLIST.format(quote_plus(search))
	# print(final_url)
	# try: 
	response = requests.get(final_url)
	data = response.text
	soup = BeautifulSoup(data, features = 'html.parser')
	listings = []

	all_posts = soup.find_all("li", {"class": "result-row"})


	for post in all_posts:
		title = post.find('a', class_='result-title').text
		link = post.find('a', class_='result-title').get('href')
		if post.find('span', class_='result-price'):
			price = post.find('span', class_='result-price').text
		else:
			price = 'N/A'
		if post.find('a', class_='result-image').get('data-ids'):
			image = post.find('a', class_='result-image').get('data-ids').split(",")[0].split(":")[1]
			image_url = BASE_IMG_URL.format(image)
			
		else:
			image_url = 'https://craigslist.org/images/peace.jpg'


		listings.append((title, link, price, image_url))
	# print(listings)

	
	context = {'search': search, 'listings':listings}
	return render(request, "myapp/new_search.html", context)
