class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :email
      t.integer :age
      t.string :phone
      t.string :place_of_birth

      t.timestamps
    end
  end
end
