class AddReferencesToUser < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :school, null: false, foreign_key: true
  end
end
