"""empty message

Revision ID: 07fc15fd28d2
Revises: a71d298402e5
Create Date: 2024-12-14 09:57:18.503800

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '07fc15fd28d2'
down_revision = 'a71d298402e5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password_hash', sa.String(length=128), nullable=False),
    sa.Column('join_date', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    with op.batch_alter_table('amazon_products_combined', schema=None) as batch_op:
        batch_op.alter_column('name',
               existing_type=sa.TEXT(),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('amazon_products_combined', schema=None) as batch_op:
        batch_op.alter_column('name',
               existing_type=sa.TEXT(),
               nullable=True)

    op.drop_table('users')
    # ### end Alembic commands ###
