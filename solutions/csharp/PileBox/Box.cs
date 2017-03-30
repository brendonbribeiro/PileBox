using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PileBox
{
	public class Box
	{
		public Box(int size)
		{
			Width = size;
			Height = size;
		}

		public Box(int width, int height)
		{
			Width = width;
			Height = height;
		}

		public int Height { get; set; }

		public int Width { get; set; }

		public Pile Pile { get; set; }
	}
}
