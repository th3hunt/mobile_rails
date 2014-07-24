class API::PeopleController < API::BaseController

  def index
    people = Person.all
    render json: people.as_json
  end

  def show
    person = Person.find(params[:id])
    render json: person
  end

end
