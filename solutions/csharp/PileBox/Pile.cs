using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PileBox
{
	public class Pile
	{
		public Pile()
		{
			Boxes = new List<Box>();
		}

		public List<Box> Boxes { get; set; }

		public int Height
		{
			get
			{
				int _height = 0;
				Boxes.ForEach(box =>
				{
					if (box.Pile != null)
					{
						_height = _height + (box.Height > box.Pile.Height ? box.Height : box.Pile.Height);
					}
					else
					{
						_height = _height + box.Height;
					}
				});

				return _height;
			}
		}

		public void AddBox(Box box)
		{
			if (Boxes.Count == 0)
			{
				Boxes.Add(box);
			}
			else
			{
				Box lastBox = Boxes.Last();
				if (lastBox.Width > box.Width)
				{
					if (lastBox.Pile == null)
					{
						lastBox.Pile = new Pile();
					}

					lastBox.Pile.AddBox(box);
				}
				else
				{
					Boxes.Add(box);
				}
			}
		}
	}
}
