open(ARGV[1], 'w') {|outfile| outfile.write(open(ARGV[0]) {|file| file.read})}
#from_file, to_file = ARGV

#puts "Copying from file to file"

#indata = open(from_file) {|file| file.read}

#puts "The input file is #{indata.length} bytes long."

#puts "Does the output file exist? #{File.exist?(from_file)}"
#puts "Ready? Hit RETURN to continue, hit CTRL-C to abort."
#$stdin.gets

#open(to_file, 'w') {|outfile| outfile.write(indata)}

#puts "Alright, all done."
