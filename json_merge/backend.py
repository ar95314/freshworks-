import os
import json
import glob
import jsonschema
import glob2

#give the correct Path for the file 
path = input("Enter the folder path for json file:  :")
#give the Base name for the file
basename = input("Enter the base name of json file: : ")
#File Size Threshold 
#check the file with context
threshold = input("Enter the File Size of the Resultant Merged File in bytes: : ")


#Check if the file size crosses the threshold
def check_if_the_size_greater_than_threshold(filename):
    st = os.stat(filename)
    return st.st_size

dir = os.path.abspath(path)
files = glob.glob(basename+'[1-9]*.json')

key_v = {}

#To read a content from file
for file in files:
	#open the file to read the  json data
	file_n = open(file,encoding = 'utf-8', mode='r')
	file_c = file_n.read()
	#file_c = fine.read()
	#json-content = load(file_c)
	json_c = json.loads(file_c)
	for key,value in json_c.items():
		if key not in key_v:
			key_v[key] = value
			#key[key] = values
		else:
			for values in value:
				#append the other files values in single key
				key_v.setdefault(key, [])
				key_v[key].append(values)
file_n.close()

#create and write the merged details in file
write = open("merged.json",encoding = 'utf-8', mode= 'w')
write.write(str(json.dumps(key_v)))
write.close()
current = check_if_the_size_greater_than_threshold('merged.json')
if (int(current) > int(threshold)):
	print ("Merged successfully, but the file Size Exceeds")
else:
	print ("Merge was Successfull")