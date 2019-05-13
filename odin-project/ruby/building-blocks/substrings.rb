def substrings(string, dictionary)
  result = {}
  string = string.downcase
  dictionary.each do |word|
    count = string.scan(word).count 
    result[word] = count if count > 0
  end
  result
end