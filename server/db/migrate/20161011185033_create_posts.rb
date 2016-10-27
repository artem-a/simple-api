class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false
      t.string :title, null: false
      t.text :body
      t.string :tags, array: true
      t.integer :ratings, array: true
      t.json :labels

      t.timestamps
    end

    add_index :posts, :tags, using: "gin"
    add_index :posts, :ratings, using: "gin"
  end
end
