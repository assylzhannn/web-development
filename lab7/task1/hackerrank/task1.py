import math
import os
import random
import re
import sys
n=int(input())
if(n%2==1):print("Weird")
elif(n%2==0 and (5>n>2 or n>20)): print("Not Weird")
else:print("Weird")