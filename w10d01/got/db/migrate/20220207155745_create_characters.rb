class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :quote
      t.references :city, index: true, foreign_key: true

      t.timestamps
    end
  end
end
