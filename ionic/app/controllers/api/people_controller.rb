class API::PeopleController < API::BaseController

  def index
    people = Person.all
    render people.as_json, format: :json
  end

  def show
    person = Person.find(params[:id])
    render person.as_json, format: :json
  end

end
