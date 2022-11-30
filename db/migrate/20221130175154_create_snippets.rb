class CreateSnippets < ActiveRecord::Migration[7.0]
  def change
    create_table :snippets do |t|
      t.text :body
      t.references :note, null: false, foreign_key: true

      t.timestamps
    end
  end
end
