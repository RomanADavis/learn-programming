puts "Let's practice everything."
puts "You'd need to know \'bout escapes with \\ that do \n newlines and \t tabs."

# the <<END is a "heredoc." See student questions.
poem = <<END
\tThe lovely void
with no reason to deny
holds tight the vain dreams of love
what cannot by built on Newton's cogs
lies only in it's imagined embrace
\n\tand with it alone
END

puts "-----------------"
puts poem
puts "-----------------"

five = 10 -2 + 3 - 6
puts "This should be five: #{five}."

def secret_formula(started)
  jelly_beans = started * 500
  jars = jelly_beans / 1000
  crates = jars / 100
  return jelly_beans, jars, crates
end

start_point = 10_000
beans, jars, crates = secret_formula(start_point)

puts "With a starting point of #{start_point}"
puts "We'd have #{beans} beans, #{jars} jars, and #{crates} crates."

start_point = start_point / 10
puts "We can also do it this way:"
puts "We'd have %s beans, %d jars and %d crates" % secret_formula(start_point)
# Making non rhyming poems that don't suck is really hard. I prefer something
# like:
# The line between what's real and not
# is only in our mind
# what's in our mind is all we've got
# so now you our bind
