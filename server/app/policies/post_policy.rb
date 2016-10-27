class PostPolicy < ApplicationPolicy

  def show?
    is_owner?
  end

end
