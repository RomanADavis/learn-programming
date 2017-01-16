class Sentence
  attr_reader :subject :verb :object
  def initialize(subject, verb, object)
    @subject = subject[1]
    @verb = verb[1]
    @ibject = object[1]
  end
end
