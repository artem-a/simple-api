class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :url
      t.string :icon
      t.references :user

      t.timestamps
    end

    add_index :companies, :name
  end
end
