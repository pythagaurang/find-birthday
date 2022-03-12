#! /usr/bin/env python3

from datetime import datetime,date
import argparse, time

DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
TODAY = date.today()

def validate(num,num_type,max_num,min_num=1):
    if num.isdecimal():
        num = int(num)
        if min_num<=num<=max_num:
            return num
        else:
            print(f"{num_type.title()} can't be {num}")
    else:
        print(f"{num_type.title()} must be a decimal number")
    
    return False

def validated_day(day):
    day = validate(day,"day",31)
    return day

def validated_month(month):
    month = validate(month,"month",12)
    return month

def validated_year(year):
    year = validate(year,"year",TODAY.year+200,TODAY.year-200)
    return year

def get_birthday(birthday=None):
    if birthday is None:
        day = input("Enter day (Example: 28): ")
        month = input("Enter month (Example: 28): ")
        year = input("Enter month (Example: 28): ")
    else:
        day,month,year = birthday
    
    if (day:=validated_day(day)) \
        and (month:=validated_month(month))\
        and (year:=validated_year(year)):
        try:
            datetime(year,month,day)
            return (day,month,year)
        except ValueError as e:
            print(str(e))
    return None

def get_weekdays(weekdays=None):
    if not weekdays:
        weekdays = input("Enter weekday to be matched(Example: Sunday, Monday or All): ")
    weekdays = weekdays.split(",")
    ans = []
    for wd in weekdays:
        wd = wd.title()
        if wd in DAYS:
            ans+=[DAYS.index(wd)]
        elif wd=="All":
            ans=[*range(7)]
            break
        else:
            print(f"{wd} is not a valid weekday")
            return None
    return set(ans)
def find_birthday_on_weekday(birthday, weekday, no_of_years):
    day, month, year = birthday
    c = 0
    for y in range(year,year+no_of_years):
        try:
            dt = datetime(y,month,day)
            if dt.weekday() in weekday:
                c+=1
                print(str(c).ljust(4),dt.strftime("%d %B, %Y").ljust(19),dt.strftime("%A").ljust(10))
        except ValueError as e:
            pass

def get_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("birthday",help="dd/mm/yy",nargs='?')
    
    parser.add_argument("weekdays",help="Day of the week (Example: Sunday, Monday or all)",nargs='?',default=None)
    parser.add_argument("-y","--years",help="Number of years to check",type=int,nargs="?",default=100)
    args=parser.parse_args()
    if args.birthday is not None:
        args.birthday=args.birthday.split('/')
    if args.years>1000:
        args.years = 1000
        print("Number of years can't be more than 1000. Setting it to 1000.")
        time.sleep(2)
    return args

def main():
    args = get_args()
    birthday = get_birthday(args.birthday)
    if birthday is not None: weekdays = get_weekdays(args.weekdays)
    if birthday is not None and weekdays is not None: find_birthday_on_weekday(birthday, weekdays,args.years)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print()
        pass
    except EOFError:
        print()
    except Exception:
        print("Unknown error")



