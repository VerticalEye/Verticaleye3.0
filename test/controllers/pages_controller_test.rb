require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get pages_home_url
    assert_response :success
  end

  test "should get about" do
    get pages_about_url
    assert_response :success
  end

  test "should get drone" do
    get pages_drone_url
    assert_response :success
  end

  test "should get survey" do
    get pages_survey_url
    assert_response :success
  end

  test "should get 3dprint" do
    get pages_3dprint_url
    assert_response :success
  end

  test "should get contacts" do
    get pages_contacts_url
    assert_response :success
  end

end
