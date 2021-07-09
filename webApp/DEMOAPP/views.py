from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def hi(request) :
    return render(request, 'DEMOAPP/hi.html')

def lesson1(request):
    return render(request,'DEMOAPP/lesson1.html')

def lesson2(request):
    return render(request,'DEMOAPP/lesson2.html')

def lesson3(request):
    return render(request,'DEMOAPP/lesson3.html')