var string = "I am a string.";
// Despite not being the same as string objects made with the String()
// constructor, you can still call String's methods on string.
string.length;//14
string.charAt( 3 );//"m"

// This is because when we try to call the methods, they're being coerceed into
// String objects.