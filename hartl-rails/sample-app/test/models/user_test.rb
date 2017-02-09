require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(name: "Example User", email: "user@example.com",
                            password: "foobar", password_confirmation: "foobar")
  end
  
  test "should be valid" do
    assert @user.valid?
  end
  
  test "name should be present" do
    @user.name = "      "
    assert_not @user.valid?
  end
  
  test "email should be present" do
    @user.email = "     "
    assert_not @user.valid?
  end
  
  test "name should not be too long" do
    @user.name = "a" * 51
    assert_not @user.valid?
  end
  
  test "email should not be too long" do
    @user.email = "a" * 244 + "@example.com"
    assert_not @user.valid?
  end
  
  test "the email validation should accept valid addresses" do
    valid_addresses = %w(user@example.com USER@foo.com A_US-ER@foo.bar.org
                          first.last@foo.jp alice+bob@baz.cn)
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert @user.valid?, "#{valid_address.inspect} should be valid"
    end
  end
  
  test "the email should reject invalid addresses" do
    invalid_addresses = %w(user@example,com user_at_foo.org user.name@example.
                        user@foo_baz.com foo@bar+baz.com foo@bar..com)
    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert_not @user.valid?, "#{invalid_address} should be invalid"
    end
  end
  
  test "email address should be unique, case insensitive" do
    duplicate = @user.dup
    duplicate.email = @user.email.upcase
    @user.save
    assert_not duplicate.valid?
  end
  
  test "email should be downcased" do
    @user.email = "PEACE@LOVE.COM"
    @user.save
    assert @user.email == "peace@love.com"
  end
  
  test "password should be present" do
    @user.password = "      "
    assert_not @user.valid?
  end
  
  test "should have a minimum length" do
    @user.password = @user.password_confirmation = "a" * 5
    assert_not @user.valid?
  end
end
